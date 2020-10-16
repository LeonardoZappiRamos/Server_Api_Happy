import Orphanage from '../models/orphanage';
import Images from './imagesView';
import imagesView from './imagesView';

export default {
    render(orphanage: Orphanage ) {

        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instruction: orphanage.instruction,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.rederMany(orphanage.images),
        };
    },
    rederMany(orphanage: Orphanage[]){
        return orphanage.map(orphanage => this.render(orphanage));
    }
};