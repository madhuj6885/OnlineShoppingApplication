import excel from "exceljs";


class  ReadData {

    async getData (sheetName) {
        let book = new excel.Workbook();

        await book.xlsx.readFile("testData/OnlineShoppingTestData.xlsx");
        let sheet = book.getWorksheet(sheetName);

        let geturl ;
        let  getusername;
        let  getpassword;

        if(sheetName == 'adminLoginCredentials') {
            // geturl(){
            //     return sheet.getRow(2).getCell(1).toString()

            // }
           this.geturl = "";
          this.getusername = sheet.getRow(2).getCell(2).toString();
           this.getpassword = sheet.getRow(2).getCell(3).toString();
             


        }
        


        
        
    }


}

export default ReadData