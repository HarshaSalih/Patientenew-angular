import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {

  constructor(private api:ApiService){}

  name=""
  searchData:any=[]

  readValues=()=>
  {
    let data={
      "name": this.name
  }
  console.log(data)
  this.api.searchPatient(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid patient name")
        
      } else {
        this.searchData=response
        
      }
    }
  )
  }


  readValue=(id:any)=>
  {
    let data:any={
      "id": id
  }
  this.api.deletePatient(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("Deleted succesfully")
        this.searchData=[]
        
        
      }
    }
  )
  }



}
