import React from 'react';
import { FeedDiv, FeedUl, ImgLi } from './styles';
import Main from '../MainItemFeed';
import Header from '../HeaderItemImg';
import ListFooterItemImg from '../FooterItemFeed';

export default function ListImagesFeed(props) {
  const { feed } = props;
  return (
    <FeedDiv>
      <FeedUl>
        {
          feed && feed.map((imageUrl, index) => (
            <ImgLi id={index + 1} key={imageUrl}>
              <Header />
              <Main imageUrl={imageUrl} />
              <ListFooterItemImg imageUrl={imageUrl} />
            </ImgLi>
          ))
        }
      </FeedUl>
    </FeedDiv>
  );
}
