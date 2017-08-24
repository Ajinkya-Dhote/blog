import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ShareDataServiceService } from './share-data-service.service';
import { PostInterface } from './post/post-interface';

@Injectable()
export class DataResolverService implements Resolve<PostInterface>{

  constructor(private post: ShareDataServiceService, private router: Router) {}
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PostInterface> {
      
      return this.post.getPost().then(data => {
        if (data) {
          return data;
        } else {
          this.router.navigate(['/home']);
          return;
        }
      });
    }
}
