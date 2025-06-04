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
![image](https://github.com/user-attachments/assets/d7c5000c-75c9-4684-998e-ea263de2cb65)

- Scenario 2: User Places an Order and Checks Out Successfully
![image](https://github.com/user-attachments/assets/f9d32728-ec52-434c-a3d5-aceaf32783fd)

- Scenario 3: Use Openweather API - Test and assert the temperature of Islamabad
![image](https://github.com/user-attachments/assets/06cf0ee7-ab1c-4be6-b83e-921dc7f417ad)


## 📦 Setup

```bash
git clone https://github.com/ZeeaanNawaz/Playwright_Assignment.git
cd Playwright_Assignment
npm install
npx playwright install
npm test
