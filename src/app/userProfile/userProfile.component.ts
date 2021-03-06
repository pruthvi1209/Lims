import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';
import { BooksFetch } from '../booksFetch.service';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit {
  isLoading = false;
  private loadingSubs: Subscription;
  borrowedBooks = [];
  booksReturnDate = [];
  wishListSubscription: Subscription;
  userDataModification: Subscription;
  wishList = [];
  constructor(private userService: UserService, private authService: AuthService, private router: Router,
    private uiService: UIService, private booksService: BooksFetch, private zone: NgZone) { }
  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.authService.autoAuth().then(() => {
      this.userDataFetching();
          });
    this.userDataModification = this.userService.userDataChanged.subscribe(() => {
    });
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['']));
    this.loadingSubs.unsubscribe();
  }
  userDataFetching() {
    this.userService.getUserData().then((user) => {
      if (user.borrowedBooks) {
        user.borrowedBooks.forEach(book => {
          this.booksReturnDate.push(book.returnDate);
          this.booksService.getBooksWithISBN(book.isbn).then((data) => {
            this.borrowedBooks.push(data);
          });
        });
      }
      if (user.wishList) {
        user.wishList.forEach(book => {
          this.booksService.getBooksWithISBN(book.isbn).then((data) => {
            this.wishList.push(data);
          });
        });
      }
    });
  }

}
