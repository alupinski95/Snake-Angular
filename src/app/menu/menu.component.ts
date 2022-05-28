import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {
  public isBlack: boolean = false;
  public selectedMenuItem: number = 1;
  private routeParamsSubscibtion: Subscription;

  constructor(private router:Router,
    private route: ActivatedRoute) {
    this.routeParamsSubscibtion = this.route.params.subscribe(params => {
      this.isBlack = params['isBlack'];
   });
  }

  public gameRedirect(){
    this.router.navigate(['/gamesnake',this.isBlack]);
  }

  public scoreRedirect(){
    this.router.navigate(['/score']);
  }

  public exitRedirect(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
      this.routeParamsSubscibtion.unsubscribe();
  }

  @HostListener('window:keydown.ArrowUp', ['$event'])
  handleArrowUpEvent(event: KeyboardEvent) {
    this.selectedMenuItem >1 ? this.selectedMenuItem--:this.selectedMenuItem=3;
  }
  @HostListener('window:keydown.ArrowDown', ['$event'])
  handleArrowDownEvent(event: KeyboardEvent) {
    this.selectedMenuItem <3 ? this.selectedMenuItem++:this.selectedMenuItem=1;
  }
}
