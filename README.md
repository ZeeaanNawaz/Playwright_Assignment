# Playwright Automation Assignment

This project contains Playwright end-to-end tests for [saucedemo.com](https://www.saucedemo.com) and openWeatherAPI using the Page Object Model pattern.
The project uses Playwright with TypeScript.

## ✅ Scenarios Covered

- Login with valid credentials
- Add item to cart, proceed to checkout, and verify successful order
- Get temperature from API, assert the temperature of Islamabad along with success response code

## ✅ Execution Results
Below are the test execution results.

- Test Results Scenario 1: Verify User Login with Valid Credentials Login Test Result
![image](https://github.com/user-attachments/assets/c6141ed9-5a48-4c4c-8fba-e81de2441162)

- Scenario 2: User Places an Order and Checks Out Successfully
![image](https://github.com/user-attachments/assets/45ec1671-b031-460f-bbe9-730a15cb9963)

- Scenario 3: Use Openweather API - Test and assert the temperature of Islamabad
![image](https://github.com/user-attachments/assets/696247ae-56a0-47f9-ac0a-7530148ff320)


## 📦 Setup

```bash
git clone https://github.com/ZeeaanNawaz/Playwright_Assignment.git
cd Playwright_Assignment
npm install
npx playwright install
npm test
