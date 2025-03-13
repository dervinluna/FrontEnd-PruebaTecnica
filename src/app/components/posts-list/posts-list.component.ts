import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  standalone: false,
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.cargarPosts();
  }

  cargarPosts(): void {
    this.postsService.obtenerPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
