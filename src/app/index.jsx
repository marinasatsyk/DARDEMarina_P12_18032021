import { Component } from 'react';

const jsonOrThrowIfError = async (response) => {
    if (!response.ok) throw new Error((await response.json()).message);
    return response.json();
};

class UserDataModel extends Component {
    constructor(data) {
        super(data);
        this.userId = data.id;
        this.userInfos = data.userInfos;
        if (data.score) {
            this.todayScore = data.score;
        } else if (data.todayScore) {
            this.todayScore = data.todayScore;
        }
        this.keyData = data.keyData;
    }

    render() {
        return null;
    }
}
let userData = await fetchUserData(id);
userData = userData.data;
const formattedUserData = new userDataModel(userData);
