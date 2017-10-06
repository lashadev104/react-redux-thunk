import reducer from '../auth'
import * as types from '../../constants/actionTypes'

describe('auth reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                id: "",
                language: "",
                firstname: "",
                lastname: "",
            }
        );
    });
});
