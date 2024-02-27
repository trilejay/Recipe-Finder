import { GiFastNoodles } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import { GiChickenLeg } from "react-icons/gi";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


function Category () {
    return(
        <List>
            <Slink to={'/cuisine/Chinese'}>
                <GiFastNoodles/>
                <h4>Chinese</h4>
            </Slink>
            <Slink to={'/cuisine/Japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </Slink>
            <Slink to={'/cuisine/Thai'}>
                <GiChickenLeg/>
                <h4>Thai</h4>
            </Slink>
        </List>
    )
}


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem; 
    text-decoration:none;
    background:linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform: scale(0.8);

    h4{
        color:white;
        font-size: 0.8rem;
    }

    svg{
        color:white;
        font-size: 1.5rem;
    }
`;


export default Category;