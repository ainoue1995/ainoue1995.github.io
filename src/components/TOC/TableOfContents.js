import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { setThemeVars } from "../../util/theme-helper";
import { theme } from "../../components/Shared/styles-global";

const getIds = (items) => {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
};


const useActiveId = (itemIds) => {
  const [activeId, setActiveId] = React.useState(``);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
};



const renderItems = (items, activeId) => {
  const classes = makeStyles({
    li: {
    }
  });

  // const currentTheme = theme;

  return (
    <ol style={{
      // listStyle: 'none',
    }}
    >
      {items ? items.map((item) => {
        return (
          <li key={item.url} style={{
            marginLeft: '15%'
          }}>
            <a
              href={item.url}
              className={classes.li}
              style={{
                // color: theme === 'dark' ?
                //   item.url ?
                //     activeId === item.url.slice(1)
                //       ? "orange" : "black" : ''
                //   :
                //   item.url ?
                //     activeId === item.url.slice(1)
                //       ? "orange" : "black" : '',
                color:
                  item.url ?
                    activeId === item.url.slice(1) ?
                      setThemeVars(theme.headerColorLight, 'white') : setThemeVars('black', 'gray')
                    : ''
              }}
            >
              {/* <span style={{
                transform: 'rotateX(360deg)';
              }}> */}
              {item.title}
              {/* </span> */}
            </a>
            { item.items && renderItems(item.items, activeId, theme)}
          </li>
        );
      }) : ''}
    </ol >
  );
};

const TableOfContents = (props) => {
  // const [currentTheme, setCurrentTheme] = React.useState(props.theme);

  // React.useEffect(() => {
  //   setCurrentTheme(props.theme);
  //   // console.log("TableOfContents -> props.theme", props.theme);
  // }, [props.theme]);
  // console.log("TableOfContents -> props", props.theme.mode);
  const idList = getIds(props.items);
  const activeId = useActiveId(idList);
  return (
    <details open>
      <summary>目次</summary>
      { renderItems(props.items, activeId)}
    </details>
  );
};


export default TableOfContents;