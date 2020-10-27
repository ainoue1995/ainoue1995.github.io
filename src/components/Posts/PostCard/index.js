import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { setThemeVars } from "../../../util/theme-helper";
import { theme } from "../../Shared/styles-global";
import config from "../../../../customize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
// import Img from 'gatsby-image';

const PostCard = ({ id, title, date, path, excerpt, timeToRead, pic }) => {
  const splitedDate = date.split(/\//);
  return (
    <>
      <Link to={path}>
        <StyledPostCard key={id}>
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div style={{
              width: '100px',
              height: '60px',
              paddingRight: '2%'
            }}>
              {pic === null ? null : <Img fluid={pic} alt='画像なし' />}
            </div> */}
          <div style={{
            width: '100%',
          }}>
            <div style={{
              alignContent: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}>
              <h3>{title}</h3>
              <p>{splitedDate[2]}年{splitedDate[0]}月{splitedDate[1]}日</p>
            </div>
            {config.showTimeToRead && (
              <span>
                <FontAwesomeIcon
                  className="icon-clock"
                  icon={faClock}
                  size="xs"
                />
                {timeToRead} minute read
              </span>
            )}
            <p>{excerpt}</p>
          </div>
          {/* </div> */}
        </StyledPostCard>
      </Link>
    </>
  );
};

export default PostCard;

const StyledPostCard = styled.div`
  cursor: pointer;
  padding: 1.5rem 1rem;
  transition: none;

  h3 {
    font-weight: 500;
  }

  &:hover {
    background: ${() => setThemeVars(theme.bgSubColorLight, theme.darkerColor)};
  }

  span {
    font-size: 0.8rem;
    .icon-clock {
      margin: 0 0.1rem;
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${() =>
    setThemeVars(theme.fontSubColorLight, theme.fontSubColorDark)};
  }

  @media (max-width: 500px) {
    padding: 1.5rem 1.25rem;

    h3 {
      font-size: 1.15rem;
    }

    /* Remove hover */
    &:hover {
      background: transparent;
    }
  }
`;
