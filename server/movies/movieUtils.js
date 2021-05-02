import movieModel from "./movieModel";

export function getAll() {
    return new Promise((resolve, reject) => {
        movieModel.find({}, (err, movies) => {
            if (err) {
                reject(err);
            } else {
                resolve(movies);
            }
        })
    })
}
export function getById(id) {
    return new Promise((resolve, reject) => {
        movieModel.findById(id, (err, movie) => {
            if (err) {
                reject(err);
            } else {
                resolve(movie);
            }
        })
    })
}
export function create(movieData) {
    return new Promise((resolve, reject) => {
        let newMovie = new movieModel({
            name: movieData.name,
            premiered: movieData.premiered,
            genres: movieData.genres,
            image: movieData.image
        });

        newMovie.save((err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Movie created successfully!');
            }
        });
    });
}
export function update(id, movieData)
{
    return new Promise((resolve,reject) => {
        movieModel.findByIdAndUpdate(id,
            {
                name: movieData.name,
                premiered: movieData.premiered,
                genres: movieData.genres,
                image: movieData.image
            }, (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve('Movie updated successfully!')
                }
            });
    });
}
export function deleteById(id) {
    return new Promise((resolve,reject) => {
        movieModel.findByIdAndDelete(id, (err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve('Movie deleted successfully!');
                }
            });    
    });
}
