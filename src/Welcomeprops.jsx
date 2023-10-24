const WelcomeProp = props => {
    return (
        <>
            <h1>Hello, 저의 이름{props.name} 입니다.</h1>;
            <h3>저의 주소는 {props.addr}이며,</h3>
            <h3>저의 나이는 {props.age}입니다.</h3>
        </>
    )
}

export default WelcomeProp;