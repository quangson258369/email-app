import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { message } from '../shared/model/message.model';
import { MessageService } from '../shared/service/message.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

  myMessage !:message
  _id!:string
  constructor(private messageService: MessageService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe((params:any)=>{
     this._id=params.id;
     this.myMessage=this.messageService.getMessages().filter((a)=>{return a._id==this._id})[0]
     console.log(params)
   })
  }
  }


