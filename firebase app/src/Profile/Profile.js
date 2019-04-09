import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AvatarSrc from "../Img/avatar.jpg";
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save'
import ImageIcon from '@material-ui/icons/Image'

const styles = () => ({});

class Profile extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <h1>Profile</h1>
                <div>
                    <img alt="avatar" src={AvatarSrc}/>
                    <div>
                        <input
                            accept="image/*"
                            className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Fab color="primary" variant="raised" component="span">
                                <ImageIcon />
                            </Fab>
                            <Fab color="primary" aria-label="Edit" className={classes.fab}>
                                <SaveIcon />
                            </Fab>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);