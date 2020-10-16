import Image from '../models/image';

export default {
    render(Image: Image ) {

        return {
            id: Image.id,
            url: `http://localhost:3333/uploader/${Image.path}`,
        };
    },
    rederMany(Images: Image[]){
        return Images.map(Images => this.render(Images));
    }
};