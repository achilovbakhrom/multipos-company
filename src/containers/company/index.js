import React,{Component} from 'react';
import styled from 'styled-components';
import HeaderComponents from '../../components/Header/HeaderComponent';
import AddList from './AddCompanyList/AddList';
import AddCompanyButton from '../../components/Button/AddCompanyButton';
import {Switch, Route, Link,withRouter } from 'react-router-dom';
import AddCompany from './AddCompany/index';
import Paper from '@material-ui/core/Paper';
import Switcher from '../../components/Switcher/Switcher';

const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
`;
const ListContentComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  
  flex-wrap: wrap;
`;
const ContentList = styled.div` 
  flex: 1.5;
  margin-right: 20px;
  text-align: center;  
`;
const ContentListContainer = styled(Paper)`
      width: 100%;
`;
const ContentCompany = styled.div`
  flex: 4;
`;

const ContentCompanyContainer = styled(Paper)`
  height: 85vh;
  width: 100%;
  
`;


class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CompanyBackgroundComponent>
          <HeaderComponents/>
          <ListContentComponent>
            {/*<ContentList>*/}
              {/*<ContentListContainer>*/}
                {/*<AddList/>*/}
              {/*</ContentListContainer>*/}
            {/*</ContentList>*/}
            <ContentCompany>
              <ContentCompanyContainer>
                <Switch>
                  {/*<Route exact path='/company' component={Component1}/>*/}
                  {/*<Route path='/company/add-company' component={AddCompany} />*/}
                  {/*<Route path='/company/edit' component={Component3} />*/}
                </Switch >
              </ContentCompanyContainer>
            </ContentCompany>
          </ListContentComponent>
        </CompanyBackgroundComponent>
      </div>
    );
  }
}

const Component1 = () => (
  <div>
    <Switcher />
    <Link to='/company/add-company' style={{textDecoration:"none"}}>
      {/*<AddCompanyButton/>*/}
    </Link>
  </div>

);
const Component2 = () => <div><AddCompany/></div>;
const Component3 = () => <h2>edit</h2>;

export default withRouter(Index);