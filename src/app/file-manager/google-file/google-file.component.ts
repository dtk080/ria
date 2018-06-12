import { Component, OnInit } from '@angular/core';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import { AuthService } from '../services/auth.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-google-file',
  templateUrl: './google-file.component.html',
  styleUrls: ['./google-file.component.css']
})
export class GoogleFileComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  gcsesearch: SafeHtml;
  ngOnInit() {
    this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml("<gcse:search></gcse:search>");

    var cx = '016820916711928902111:qw0kgpuhihm';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }
}
