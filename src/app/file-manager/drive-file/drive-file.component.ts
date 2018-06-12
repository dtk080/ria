import { Component, OnInit } from '@angular/core';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import { AuthService } from '../services/auth.service';
import { GoogleService } from '../services/google.service';
import { TreeviewItem } from 'ngx-treeview';
@Component({
    selector: 'app-drive-file',
    templateUrl: './drive-file.component.html',
    styleUrls: ['./drive-file.component.css']
})
export class DriveFileComponent implements OnInit {
    public driveOriginalFiles: any[] = [];
    public driveFiles: TreeviewItem[] = [];
    public checkedDriveFiles: TreeviewItem[] = [];
    public remoteOriginalFiles: TreeviewItem[] = [];
    public remoteFiles: TreeviewItem[] = [];
    public checkedRemoteFiles: TreeviewItem[] = [];
    public config;
    public isLoading: boolean;

    constructor(private userService: AuthService,
        private authService: GoogleAuthService,
        private gapiService: GoogleApiService,
        private googleService: GoogleService) {
        this.gapiService.onLoad().subscribe();
        this.authService.getAuth().subscribe((auth) => {
        });
        this.config = {
            hasAllCheckBox: false,
            hasFilter: false,
            hasCollapseExpand: false,
            decoupleChildFromParent: false
        }
    }

    ngOnInit() {
        if (!!this.isLoggedIn()) {
            this.getFiles();
        }
    }

    isLoggedIn(): boolean {
        if (!this.isLoading && (!this.driveOriginalFiles || this.driveOriginalFiles.length === 0)) {
            this.getFiles();
        }
        return this.userService.isUserSignedIn();
    }

    signIn() {
        this.userService.signIn();
    }

    getFiles() {
        this.isLoading = true;
        this.googleService.getAllFiles().subscribe(
            response => {
                this.driveOriginalFiles = response.items;
                for (let item = 0; item < response.items.length; item++) {
                    const element = response.items[item];
                    this.driveFiles.push(new TreeviewItem({ text: element.title, value: element.id, checked: false }));
                    this.isLoading = false;
                }
            }
        );
    }

    onSelectedDriveChange(ids: any) {
        this.checkedDriveFiles = ids;
    }

    onSelectedRemoteChange(ids: any) {
        this.checkedRemoteFiles = ids;
    }

    addToRemote() {
        for (let r = 0; r < this.checkedDriveFiles.length; r++) {
            let element = this.driveFiles.filter(x => x.value === this.checkedDriveFiles[r])[0];
            element.checked = false;
            this.remoteFiles.push(new TreeviewItem({ text: element.text, value: element.value, checked: false }));
        }
        this.checkedDriveFiles = [];
    }

    addToDrive() {
        for (let r = 0; r < this.checkedRemoteFiles.length; r++) {
            let element = this.remoteFiles.filter(x => x.value === this.checkedRemoteFiles[r])[0];
            element.checked = false;
            this.driveFiles.push(new TreeviewItem({ text: element.text, value: element.value, checked: false }));
        }
        this.checkedRemoteFiles = [];
    }
}
