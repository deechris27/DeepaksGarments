import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
  constructor(){
      super();
     this.state = {
        sections: [
       {
         title: 'kids wear',
         imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ-jlelj8Ly-dUZksF2IDHnIm5qqV8cypqfA8_b8kG6KkoKD43',
         id: 1,
         linkUrl: 'kids'
       },
       {
         title: 'Ethnic collections',
         imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWlE1Bjjv4JsjrlLBIxpTpbcw6I3VKwb2X3pFnibIsvZiNdToX',
         id: 2,
         linkUrl: 'shop/ethnic'
       },
       {
         title: 'sarees',
         imageUrl: 'https://files.sareeswholesale.com/images/450/Graceful-Reception-Wear-Maroon-Lycra-Sequins-Work-Saree-140900.jpg',
         id: 3,
         linkUrl: 'shop/sarees'
       },
       {
         title: 'womens',
         imageUrl: 'https://cdn.pixabay.com/photo/2016/09/22/18/21/beautiful-1687942_960_720.jpg',
         size: 'large',
         id: 4,
         linkUrl: 'shop/womens'
       },
       {
         title: 'mens',
         imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWrgRT6I1Vtiuig71RGzYafQwjnAHKsSTUM_RpwvmcirBoyUlg',
         size: 'large',
         id: 5,
         linkUrl: 'shop/mens'
       }
     ]
   };
  }

  render(){
      return(
        <div className='directory-menu'>
            {this.state.sections.map(({id, ...props}) => {
                return <MenuItem key={id} {...props}/>
            })}
        </div>
      )
  }
  
}

export default Directory;