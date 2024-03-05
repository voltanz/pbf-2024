export function getImageUrl(imageId: any, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  
  export function getImageUrlV2(person: any, size: any) {
     return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
     );
  }
    