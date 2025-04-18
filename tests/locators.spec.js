
import {  test } from "@playwright/test";
import Login from "../pageobjects/login.js";
import Task from "../pageobjects/task.js";
import Customer from "../pageobjects/customer.js";
import Project from "../pageobjects/project.js"
import { describe } from "node:test";

describe(" ",()=>{
  
})
test("Create Customer",async ({page}) =>{
let login = new Login(page);
let task = new Task(page);
let customer = new Customer(page);
await login.getUrl("http://localhost/login.do");
await login.login("admin", "manager");
await page.waitForTimeout(2000);
await task.addTask();
await customer.addCustomer();
await page.pause();
await page.waitForTimeout(2000);
await login.logout();
})

test("Create Project",async ({page}) =>{
  let login = new Login(page);
  let task = new Task(page);
  let project = new Project(page);
  await login.getUrl("http://localhost/login.do");
  await login.login("admin", "manager");
  await page.waitForTimeout(2000);
  await task.addTask();
  await project.createProject();
  await page.waitForTimeout(2000);
  await login.logout();
  })