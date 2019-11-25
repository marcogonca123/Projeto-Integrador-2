import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  padding: 15px 10px;
`;

export const RequestList = styled.FlatList.attrs({
  showVerticalScrollIndicator: true,
  contentContainerStyle: {paddingTop: 7},
})``;

export const Request = styled(RectButton)`
  margin-top: 12px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px;
`;

export const RequestHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.Text``;

export const RequestBody = styled.View`
  padding-top: 10px;
`;

export const RequestText = styled.Text`
  font-family: Roboto-Regular sans-serif;
  font-size: 14px;
  color: #666666;
  line-height: 26px;
`;
