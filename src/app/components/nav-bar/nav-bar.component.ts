import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Navigation {
    title: string;
    link: string;
}

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
    isManueOpened: Boolean = false;
    theme: String = 'dark';
    navigations: Array<Navigation> = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Events', link: '/events' },
        { title: 'Achievments & Projects', link: '/project-and-achievments' },
    ];
    constructor(private document: ElementRef) {}

    changeTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        if (this.theme === 'dark') {
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
        }
    }

    ngOnInit() {
        let themeIcons: HTMLElement[] =
            this.document.nativeElement.querySelectorAll('.themeChanger');
        for (let j = 0; j < themeIcons.length; j++) {
            themeIcons[j].addEventListener('click', () => {
                if (this.theme === 'dark') {
                    for (let i = 0; i < themeIcons.length; i++) {
                        themeIcons[i].classList.remove('fa-sun');
                        themeIcons[i].classList.add('fa-moon');
                    }
                } else {
                    for (let i = 0; i < themeIcons.length; i++) {
                        themeIcons[i].classList.remove('fa-moon');
                        themeIcons[i].classList.add('fa-sun');
                    }
                }
                this.changeTheme();
            });
        }
    }
}
