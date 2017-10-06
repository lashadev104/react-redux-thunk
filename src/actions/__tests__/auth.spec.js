import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../auth'
import * as types from '../../constants/actionTypes'
import moxios from 'moxios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_END_POINT = process.env.REACT_APP_API_ENDPOINT || 'https://gigder-api-dev.herokuapp.com';

describe('async actions', () => {
    beforeEach(function () {
        moxios.install()
    });
    
    afterEach(function () {
        moxios.uninstall()
    });
  
    it('creates LOGIN_SUCCESS when authentication is sucessful', () => {
        const loginRequestParams = {
            email: "asd@asd.com",
            password: "123"                
        };

        const response = { 
            token: '123'
        };

        moxios.stubRequest(API_END_POINT + '/api/users/auth', {
            status: 200,
            response: response
            });
  
        const expectedActions = [
            // we need a fetching request. it means : fetching -> success or fetching -> failed
            // { 
            //     type: types.FETCH_TODOS_REQUEST 
            // },
            {
                type: types.LOGIN_SUCCESS,
                payload: response
            },
            {
                type: "@@router/CALL_HISTORY_METHOD",
                payload: { 
                    "args": [ "/home" ],
                    "method": "push",
                }
            }
        ]
      
        const store = mockStore({ auth: [] })
  
        return store.dispatch(actions.loginRequest(loginRequestParams)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        });
    })
})