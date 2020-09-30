import App from '../../common/App.jsx'

let info = null;
let loading = false;

let TraineeProfile = {
    get: () => {
        if (loading) {
            let promiseFunc = (resolve, reject) => {
                let check = () => {
                    if (info) {
                        resolve(info);
                    } else {
                        setTimeout(check, 50)
                    }
                };
                check();
            };
            return new Promise(promiseFunc);
        }
        loading = true;
        if (info) {
            loading = false;
            return new Promise((resolve, reject) => {
                resolve(info);
            });
        } else {
            return TraineeProfile.load();
        }
    },
    load: () => {
        return App.api('trainee/trainee/profile', {}, {defaultErrorProcess: false}).then((result) => {
            loading = false;
            info = result;
            return info;
        }, () => {
            loading = false;
        });
    },
    clear: () => {
        info = null;
        loading = false;
    }
};

export default TraineeProfile;