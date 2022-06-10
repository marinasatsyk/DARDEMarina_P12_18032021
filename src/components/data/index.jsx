import { Component } from 'react';

class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            fetchError: null,
        };
        // this.id = id;
        // this.detail = detail;
        this.API_URL = `http://localhost:3000/user/12`;

        // this.API_URL = this.detail
        //     ? `http://localhost:3000/user/${id}/${detail}`
        //     : `http://localhost:3000/user/${id}`;
    }

    componentDidMount() {
        // const { Id } = this.props.match.params;
        fetch(this.API_URL);
        async function fetchFunc() {
            try {
                const response = await fetch(this.API_URL);
                const dataResp = await response.json();
                console.log(dataResp);
                this.setState({
                    data: dataResp,
                    fetchError: null,
                });
            } catch (err) {
                console.log(err.stack);
                this.setState({
                    fetchError: err.message,
                });
            }
        }
        fetchFunc();
        // fetch(`http://localhost:3000/user/?id=${userId}`)
        //   async function fetchUser() {
        //     try {
        //         const response = await fetch(API_URL);
        //         const dataUser = await response.json();
        //         console.log(dataUser);
        //         setUser(dataUser);
        //         setFetchError(null);
        //     } catch (err) {
        //         console.log(err.stack);
        //         setFetchError(err.message);
        //     }
        // },

        // fetch(this.API_URL)
        //     .then((response) => response.json())
        //     .then((jsonResponse) => {
        //         console.log(jsonResponse);
        //         this.setState({
        //             user: jsonResponse.data,
        //             fetchError: null,
        //         });
        //         console.log(this.state.user);
        //     });
    }

    render() {
        const { data } = this.state.data;

        // console.log(data);

        return (
            <>
                <div>class generic</div>
            </>
        );
    }
}

export default Fetch;
