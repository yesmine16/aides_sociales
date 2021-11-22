import { Component, OnInit ,ViewChild, ElementRef, VERSION } from '@angular/core';
import { Formm } from '../formm';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormmService } from '../formm.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;

dtOptions: any = {};
admin = {};
  
  formm: Formm[];

  private getform(){
    this.webService.getList().subscribe(data => {
      this.formm = data;
    });
  }


  constructor(private router: Router, private http: HttpClient,private webService:FormmService) {}


  ngOnInit(): void {
    this.getform();

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              dom: 'Bfrtip',
                language: {
                  emptyTable: 'لايوجد بيانات',
                  loadingRecords: 'جار التحميل...',
                  processing: "الاستعلام ...",
                  search: "الرجاء إدخال كلمة رئيسية:",
                  lengthMenu: "كل صفحة _MENU_ من العناصر",
                  zeroRecords: 'لايوجد بيانات',
                  paginate: {
                      'first':      "الصفحة الأولى",
                      'last':       "الصفحة الأخيرة",
                      'next':       'الصفحة التالية',
                      'previous':   'الصفحة السابقة'
                  },
                  info: "الصفحة _PAGE_ / إجمالي _PAGES_ ، إجمالي _TOTAL_ من النتائج",
                  infoEmpty: 'لايوجد بيانات',
                  infoFiltered: ("إجمالي عناصر التصفية _ MAX_ من العناصر") ,
              },
              buttons: [
                  
                  {
                      extend: 'excelHtml5',
                      title: 'مساعدة اجتماعية',
                      exportOptions: {
                        columns: ':visible'
                    }
                  },
                  {
                    extend: 'pdf',
                   
                },
              
                  {
                      extend:'print',
                      exportOptions: {
                        columns: ':visible'
                    }
                  },
                  {
                    extend:'colvis'
                  }
              ],
        

            };
          
         

	}



         
 
 
  }
   

