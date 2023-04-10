import React from 'react';

const styles = {
    title: {
        fontSize: '50px',
        textAlign: 'center',
        fontFamily: 'Agency FB',
    },
    latest: {
        color: 'red',
    },
}
const Title = () => (
    <div style={styles.title}>
        <span style={styles.latest}>Latest </span> News
    </div>
);

export default Title;