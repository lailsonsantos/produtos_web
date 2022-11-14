import { Component, OnInit } from '@angular/core';
import { FdxClientServiceService } from './services/fdx-client-service.service';
import { FdxClient } from './models/FdxClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  fdxClient = {} as FdxClient;
  fdxClients: FdxClient[] | undefined;

  constructor(private fdxClientServiceService: FdxClientServiceService){}
  
  ngOnInit(): void {
    this.getFdxClient();
  }

  getFdxClient(){
    this.fdxClientServiceService.getFdxClient().subscribe((fdxClients: FdxClient[]) => {
      this.fdxClients = fdxClients;
    })
  }
}
