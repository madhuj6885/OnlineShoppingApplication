import test from "@playwright/test";
import HomePage from "../HMSPage/HomePage";

test("Home Page and click login",async  ({page}) =>{
let h = new HomePage(page);
await page.pause();
await h.triggerUrl("http://49.249.28.218:8081/AppServer/Hospital_Doctor_Patient_Management_System/");
await h.clickLoginLink();
await h.loginasPatient();





})