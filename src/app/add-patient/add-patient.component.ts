import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  name=""
  address=""
  mobile=""
  dateOfAppointment=""
  doctorName=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.mobile,"dateOfAppoinment":this.dateOfAppointment,"doctorName":this.doctorName}
    console.log(data)
  }


}
