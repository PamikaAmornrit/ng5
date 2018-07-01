import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//ตัวแปรหรือ พ้อพพอตี้
itemCount:number  = 4;
Textsting:string = 'น้องนุ่น'
btntext:string = 'เพิ่มรายการใหม่' // 1 way blinding
listtext:string ='รายการเริ่มต้น' // 2 way blinding (model)
listall=[];


  constructor() { }

  ngOnInit() {
    this.itemCount = this.listall.length

  }
additem(){
  if(this.listtext!=""){
  //รับค่าจากฟอร์ม และบันทึกลงอาเรย์
  this.listall.push(this.listtext);
  this.listtext=''
  this.itemCount = this.listall.length
  //alert('OK')
  }
}

}
