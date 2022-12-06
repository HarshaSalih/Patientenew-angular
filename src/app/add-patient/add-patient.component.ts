import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.mobile,"dateOfAppoinment":this.dateOfAppointment,"doctorName":this.doctorName}
    console.log(data)

    this.api.addPatient(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Course added successfully")
          this.name=""
          this.address=""
          this.mobile=""
          this.dateOfAppointment=""
          this.doctorName=""
        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }


}
