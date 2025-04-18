import test from "@playwright/test";
import excel from "exceljs";
import data from '../testData/data.json';

test("Reading login credentials by using Excel Workbook", async ({page}) =>{

let book = new excel.Workbook();
await book.xlsx.readFile("./testData/LoginDetails.xlsx.xlsx");
let sheet = book.getWorksheet("Login");
let username = await sheet.getRow(2).getCell(1).toString();
let password =await sheet.getRow(2).getCell(2).toString();
console.log("Username is :" + username + " and pasword is :" + password);



})

test("Writing login credentials by using Excel Workbook", async ({page}) =>{

    let book = new excel.Workbook();
  await  book.xlsx.readFile("./testData/LoginDetails.xlsx.xlsx");
    let sheet = book.addWorksheet("writingData");
 sheet.getRow(1).getCell(1).value = "User name";
    sheet.getRow(1).getCell(2).value = "Password";
    sheet.getRow(2).getCell(1).value = "Mithun";
     sheet.getRow(2).getCell(2).value = "mithunn@gmail.com";

    await book.xlsx.writeFile("./testData/LoginDetails.xlsx.xlsx");

    // console.log("Username is :" + username + " and pasword is :" + password);
    
    
    
    })

    test("Reading Multiple Data", async ({page}) =>{
        let book = new excel.Workbook();
await book.xlsx.readFile("./testData/LoginDetails.xlsx.xlsx");
let sheet = book.getWorksheet("readMultipleData");
let lastRow = sheet.rowCount;
let lastCol = sheet.columnCount;


for(let i=1; i<=lastRow;i++) {
    for(let j=1; j<=lastCol; j++) {
        console.log(await sheet.getRow(i).getCell(j).toString());

    }
}


    }) 

    test("Reading single data in JSON Format", ({}) =>{
        console.log(data.adminName);
        console.log(data.adminPassword);
        console.log(data.url);
    })



    data.forEach((obj, i) =>{
        test.only(`Multiple Data ${i}`,async ({}) =>{
            console.log(await obj.adminName);
    console.log(await obj.adminPassword);
    console.log(await obj.url);

       }   )
        
        
        
        
        }
    )

          
                
           



