import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Newsitem(props) {
    return (
        <div className='my-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://i.ytimg.com/vi/dWoC4iHCjWI/maxresdefault.jpg"} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button href={props.url} target="_blank" variant="primary btn-sm">
                        Read More
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Newsitem;