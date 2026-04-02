#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class SkipBinAPITester:
    def __init__(self, base_url="https://bin-delivery-sa.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                print(f"❌ Unsupported method: {method}")
                return False, {}

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    return True, response_data
                except:
                    print(f"   Response: {response.text[:200]}...")
                    return True, {}
            else:
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:500]
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                return False, {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.failed_tests.append({"test": name, "error": "timeout"})
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({"test": name, "error": str(e)})
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "api/", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "phone": "0412345678",
            "message": "This is a test message for skip bin hire inquiry."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST", 
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            # Verify response structure
            required_fields = ['id', 'name', 'email', 'message', 'timestamp']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field in response: {field}")
                    return False
            print(f"✅ Contact submission created with ID: {response.get('id', 'N/A')}")
            return response.get('id')
        return None

    def test_get_contacts(self):
        """Test retrieving contact submissions"""
        return self.run_test("Get Contact Submissions", "GET", "api/contact", 200)

    def test_invalid_contact_submission(self):
        """Test contact form with missing required fields"""
        invalid_data = {
            "name": "",  # Missing name
            "email": "invalid-email",  # Invalid email
            "message": ""  # Missing message
        }
        
        # This should return 422 for validation error, but let's see what it actually returns
        success, response = self.run_test(
            "Invalid Contact Submission",
            "POST",
            "api/contact", 
            422,  # Expected validation error
            data=invalid_data
        )
        
        # If it doesn't return 422, let's check what it does return
        if not success:
            print("   Note: API may not have proper validation - checking actual behavior")
        
        return success

def main():
    print("🚀 Starting Shano's Skips API Testing...")
    print("=" * 50)
    
    # Setup
    tester = SkipBinAPITester()
    
    # Run tests
    print("\n📋 Testing API endpoints...")
    
    # Test API root
    tester.test_api_root()
    
    # Test contact form submission
    contact_id = tester.test_contact_submission()
    
    # Test getting contacts
    tester.test_get_contacts()
    
    # Test invalid submission
    tester.test_invalid_contact_submission()
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"📊 Test Summary:")
    print(f"   Tests run: {tester.tests_run}")
    print(f"   Tests passed: {tester.tests_passed}")
    print(f"   Tests failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.failed_tests:
        print(f"\n❌ Failed tests:")
        for failure in tester.failed_tests:
            print(f"   - {failure}")
    
    # Return exit code
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())