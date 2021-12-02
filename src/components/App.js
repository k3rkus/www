import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import * as ReactGA from 'react-ga';

import WarningIcon from '@material-ui/icons/Warning';
import MenuIcon from '@material-ui/icons/Menu';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import InfoIcon from '@material-ui/icons/Info';

import Button from '@material-ui/core/Button';
import Loader from './Loader';
import GraphSvg from './GraphSvg';

import SidebarButton from './SidebarButton';
import FabPopup from './FabPopup';
import SidebarPopup from './SidebarPopup';
import NestedSidebarButton from './NestedSidebarButton';
import SimpleSidebarButton from './SimpleSidebarButton';
import SidebarPanel from './SidebarPanel';
import ClearButton from './ClearButton';
import ShareButton from './ShareButton';
import SelectorPanel from './SelectorPanel';
import NightToggle from './NightToggle';
import {loadHash, useExperimentalFeature} from './GraphSvg/util';

import createDatabase from './newData';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import globalData from './data';
import { ContactSupportOutlined } from '@material-ui/icons';

const drawerWidth = 260;

const styles = theme => ({
  centeredLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    flexBasis: 'auto',
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 12,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    minHeight: 64
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'flex',
    paddingTop: 64,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'unset'
  },
  drawerTitle: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: 64,
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    width: drawerWidth - 10,
  },
  logoSmall: {
    width: 25,
  },
  grow: {
    flexGrow: 1,
  },
  pathIcon: {
    height: 15,
    width: 15,
    display: 'inline-block'
  },
  pathText: {
    display: 'inline-block'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
  },
  button: {
    flex: '0 0 100%',
  },
  label: {
    paddingLeft: 10,
  },
  inlineDialogButton: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  dialogButton: {
    marginTop: 10,
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  clearButton: {
    paddingTop: 20,
  },
  hiddenFlex: {
    display: 'flex',
    height: '100%'
  },
});

const palette = {
  type: 'light',
  primary: { main: '#FF9100' },
  secondary: { main: '#FF3D00', contrastText: '#FAFAFA' }
};

const paletteDark = {
  type: 'dark',
  primary: { main: '#FF9100' },
  secondary: { main: '#FF3D00', contrastText: '#FAFAFA' }
};

const themeName = 'Pizazz Vermilion Gayal';

const theme = createMuiTheme({ typography: {
  useNextVariants: true,
}, palette : {
  type: 'light',
  primary: { main: '#FF9100' },
  secondary: { main: '#FF3D00', contrastText: '#FAFAFA'},
}, themeName: themeName});

const themeDark = createMuiTheme({ typography: {
  useNextVariants: true,
}, palette: {
  type: 'dark',
  primary: { main: '#FF9100' },
  secondary: { main: '#FF3D00', contrastText: '#FAFAFA'},
}, themeName: themeName});

class App extends Component {
  constructor(props) {
    super(props);
    let n = (window.localStorage.getItem('nightMode') != null) ? window.localStorage.getItem('nightMode') : 'light';
    window.localStorage.setItem('nightMode', n);
    this.state = {
      loaded: false,
      mobileOpen: false,
      theme: n === 'light' ? theme : themeDark,
      night: n,
    };
  }

  handleNightToggle = () => {
    let newPaletteType = window.localStorage.getItem('nightMode') === 'light' ? 'dark' : 'light';
    this.setState({
      theme: newPaletteType === 'light' ? theme : themeDark,
      night: newPaletteType
    });
    window.localStorage.setItem('nightMode', newPaletteType);
  };

    handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    getRefkeyTableFireBase(table) {
      const db = this.state.fbdb;
      const tableRef = db[table]
      return Promise.resolve(tableRef);
    }

    generateRecursiveStructureFireBase(startingTable) {
      const db = this.state.fbdb;
      const starting = db[startingTable]
      this.globalStructure = this.globalStructure || {};
      const globalStructure = this.globalStructure;

      return Promise.resolve(starting).then( async results => {
        if (results.length > 0) {
          globalStructure[startingTable] = results;
          const refKeysToProcess = Object.keys(results[0]).filter(str => str.endsWith('_id'));

          while (refKeysToProcess.length > 0) {
            const refKey = refKeysToProcess.pop();
            const tableName = refKey.slice(0, -3);
            if (!globalStructure[tableName]) {
              globalStructure[tableName] = await this.getRefkeyTableFireBase(tableName);
              Object.keys(globalStructure[tableName]).filter(str => str.endsWith('_id'))
                .forEach(name => {
                  if (!globalStructure[name.slice(0, -3)]) {
                    refKeysToProcess.push(name);
                  }
                });
            }
          }

          const recursiveFind = (element, functionToApply) => {
            if (Array.isArray(element)) {
              element.forEach((elem, index) => {
                const shouldChangeThis = recursiveFind(elem, functionToApply);
                if (shouldChangeThis) {
                  console.error('Why are we doing this to an array?');
                  element[index] = functionToApply(elem);
                }
              });
              return false;
            } else if (typeof element === 'object') {
              Object.keys(element).forEach(key => {
                const elem = element[key];

                const shouldChangeThis = recursiveFind(elem, functionToApply);
                if (shouldChangeThis) {
                  functionToApply(elem, key, element);
                }
              });
              return false;
            } else {
              return true;
            }
          };

          Object.keys(globalStructure).forEach(key => {
            const rows = globalStructure[key];

            rows.forEach(row => {
              Object.keys(row).filter(str => str.endsWith('_id')).forEach(rowKey => {
                const refId = row[rowKey];
                const tableName = rowKey.slice(0, -3);
                const associatedData = globalStructure[tableName];
                delete row[rowKey];
                const possibleData = associatedData.filter(elem => elem.id === refId);
                if (possibleData.length === 1) {
                  row[tableName] = possibleData[0];
                } else {
                  throw new Error('Unrecognized Id ' + refId + ' in ' + rowKey + ' within ' + key);
                }
              });
            });
          });

          Object.keys(globalStructure).forEach(key => {
            const rows = globalStructure[key];
            rows.forEach(row => {
              Object.keys(row).filter(str => str.endsWith('_id')).forEach(rowKey => {
                const refId = row[rowKey];
                const tableName = rowKey.slice(0, -3);
                const associatedData = globalStructure[tableName];
                delete row[rowKey];

                const possibleData = associatedData.filter(elem => elem.id === refId);
                if (possibleData.length === 1) {
                  row[tableName] = possibleData[0];
                } else {
                  throw new Error('Unrecognized Id ' + refId + ' in ' + rowKey + ' within ' + key);
                }
              });
              Object.keys(row).filter(str => !str.endsWith('_id')).forEach(rowKey => {
                const rowValue = row[rowKey];
                const replaceTable = (id, id_name, object) => {
                  if (!id_name.endsWith('_id')) {
                    if (typeof object[id_name] === 'string' && object[id_name].startsWith('http')) {
                      const img = new Image();
                      img.src = object[id_name];
                    }
                    return;
                  }

                  const refId = id;
                  const tableName = id_name.slice(0, -3);
                  const associatedData = globalStructure[tableName];
                  delete object[id_name];

                  const possibleData = associatedData.filter(elem => elem.id === refId);
                  if (possibleData.length === 1) {
                    object[tableName] = possibleData[0];
                  } else {
                    throw new Error('Unrecognized Id ' + refId + ' in table ' + id_name + ' within ' + object);
                  }
                };
                recursiveFind(rowValue, replaceTable);
              });
            });
          });
        }

        return globalStructure;
      });
    }

    componentDidMount() {
      ReactGA.initialize('UA-136827615-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
      window.addEventListener('hashchange', () => {
        document.location.reload();
      }, false);

      loadHash().then(data => {
        this.setState({coreGraphData: data}, () => {


          this.setState({fbdb: globalData, loaded: true}, () => {

            const generate = (name, cb = () => {}) => {
              return () => {
                return this.generateRecursiveStructureFireBase(name).then(data => {
                  this.setState({[name]: data}, () => {
                    console.debug('Loaded', name);
                    cb();
                  });
                });
              };
            };

            let wrappedFunction = () => {
              this.setState({isLoaded: true});
            };
            const list = ['spring', 'recipe', 'path_type','machine_node', 'player_unlock', 'machine_class', 'item', 'spring_type', 'purity_type', 'node_type', 'machine_version', 'machine_class'];

            list.forEach(item => {
              wrappedFunction = generate(item, wrappedFunction);
            });

            wrappedFunction();










            // const gen = generate('player_unlock', generate('item', generate('recipe',
            //     generate('machine_class',  generate('machine_node',  generate('machine_version',  generate('spring',
            //
            //         generate('path_type',  generate('purity_type',   )
            //         )))))));
            // gen();

            //     return this.generateRecursiveStructureFireBase('player_unlock').then(player_unlock => {
            //         this.setState({player_unlock}, () => {
            //             return this.generateRecursiveStructureFireBase('recipe').then(recipe => {
            //                 this.setState({recipe}, () => {
            //                     return this.generateRecursiveStructureFireBase('machine_class').then(machine_node => {
            //                     return this.generateRecursiveStructureFireBase('machine_node').then(machine_node => {
            //                 //         this.setState({machine_node}, () => {
            //                 //             return this.generateRecursiveStructureFireBase('spring').then(spring => {
            //                 //                 this.setState({spring}, () => {
            //                 //                     return this.generateRecursiveStructureFireBase('path_type').then(path_type => {
            //                 //                         this.setState({path_type}, () => {
            //                 //                             return this.generateRecursiveStructureFireBase('purity_type').then(purity_type => {
            //                 //                                 this.setState({purity_type, isLoaded: true});
            //                 //                             });
            //                 //                         });
            //                 //                     });
            //                 //                 });
            //                 //             });
            //                 //         });
            //                     });
            //                 });
            //             });
            //         });
            //     });
            // });

            // ref.once("value", function(data) {
            //     const stateObject = {isLoaded: true, loaded: true };
            //     const endObject = {};
            //     const dataFull = data.val();
            //     Object.keys(data.val()).forEach(key => {
            //         endObject[key] = dataFull[key];
            //     });
            //
            //     Object.keys(data.val()).forEach(key => {
            //         stateObject[key] = endObject;
            //     });
            //
            //     console.log(stateObject);
            //     tVar.setState(stateObject);
            // });


            if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
              createDatabase();
            }

            // createDatabase().then(() => {
            //     return this.generateRecursiveStructure('player_unlock').then(player_unlock => {
            //         this.setState({player_unlock}, () => {
            //             return this.generateRecursiveStructure('recipe').then(recipe => {
            //                 this.setState({recipe}, () => {
            //                     return this.generateRecursiveStructure('machine_node').then(machine_node => {
            //                         this.setState({machine_node}, () => {
            //                             return this.generateRecursiveStructure('spring').then(spring => {
            //                                 this.setState({spring}, () => {
            //                                     return this.generateRecursiveStructure('path_type').then(path_type => {
            //                                         this.setState({path_type}, () => {
            //                                             return this.generateRecursiveStructure('purity_type').then(purity_type => {
            //                                                 this.setState({purity_type, isLoaded: true});
            //                                             });
            //                                         });
            //                                     });
            //                                 });
            //                             });
            //                         });
            //                     });
            //                 });
            //             });
            //         });
            //     });
            // });



          });
        });
      });
      // saveHash({data: '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'});
    }

    generateNodeList() {
      const recipesByMachineClass = {};
      const machineClassPlural = {};
      this.state.recipe && this.state.recipe.recipe.forEach(recipe => {
        const thisList = recipesByMachineClass[recipe.machine_class.name] || [];
        thisList.push(recipe);
        recipesByMachineClass[recipe.machine_class.name] = thisList;
        machineClassPlural[recipe.machine_class.name] = recipe.machine_class.plural;
      });
      Object.keys(recipesByMachineClass).map(item  => {
        recipesByMachineClass[item].sort((a, b) => {
          return a.item.id - b.item.id;
        });
      });
      return Object.keys(recipesByMachineClass).map(key =>
        <SidebarButton appObject={this} label={machineClassPlural[key]} key={key} items={recipesByMachineClass[key]}/>
      );
    }

    generateContainerList() {
      const springByClass = {};
      this.state.purity_type && this.state.spring && this.state.spring.spring.forEach(spring => {
        const thisList = springByClass[spring.spring_type.name] || [];
        thisList.push(spring);
        springByClass[spring.spring_type.name] = thisList;
      });

      // Manually handle splitters and mergers
      springByClass['Logistic'] = this.state.machine_node.machine_node.filter(elem => elem.machine_class.name === 'Logistic');


      return (
        <React.Fragment>
          <SimpleSidebarButton label="Logistics" appObject={this} listItems={springByClass}/>
        </React.Fragment>

      );
    }

    generateUnlocksList() {
      const dataList = [];
      this.state.player_unlock && this.state.player_unlock.player_unlock.forEach(player_unlock => {
        const item = this.state.recipe.recipe.filter(elem => elem.player_unlock && (elem.player_unlock.id === player_unlock.id))[0];
        if (item) {
          // dataList.push({player_unlock, item});
        }
      });
      return (
        <div>hello</div>
      );
    }

    generateSpringList() {
      this.generateUnlocksList();
      const springByClass = {};
      this.state.spring && this.state.spring.spring.forEach(spring => {
        const thisList = springByClass[spring.spring_type.name] || [];
        thisList.push(spring);
        springByClass[spring.spring_type.name] = thisList;
      });
      return (
        <NestedSidebarButton label='Miners' listItems={springByClass} appObject={this}/>
      );
    }

    drawerContents = () => {
      const classes = this.props.classes;
      return <React.Fragment>
        <List>
          <Typography variant="h5" className={classes.drawerTitle}>Nodes</Typography>
          {this.generateNodeList()}
          {this.generateContainerList()}
          {this.generateSpringList()}
        </List>
        <Divider/>

        <SidebarPanel parentState={this} playerUnlock={this.state.player_unlock}/>

        <Divider/>

        <List>
          <SidebarPopup Icon={InfoIcon} label='About/Disclaimers' title='About/Disclaimers'>
            <Typography variant="body1">Created by <Link href="https://github.com/tehalexf" target="_blank" rel="noopener" color='secondary'>Alex</Link> and <Link
              href="https://github.com/thinkaliker" target="_blank" rel="noopener" color='secondary'>Adam</Link> (<Link
              href="https://twitter.com/thinkaliker" target="_blank" rel="noopener" color='secondary'>@thinkaliker</Link>).</Typography>
            <Typography variant="body1">Not officially affiliated with Satisfactory, Coffee Stain
                      Studios AB, or THQ Nordic AB.</Typography>
            <Typography variant="body1">Images sourced from the Satisfactory Wiki, which is sourced from
                      Coffee Stain Studios AB's Satisfactory.</Typography>
          </SidebarPopup>
          <SidebarPopup Icon={WarningIcon} label='Known Issues' title='Known Issues'>
            <ul>
              <Typography variant='body1'><li>Resource nodes do not have purities displayed on the graph.</li></Typography>
              <Typography variant='body1'><li>No option yet to hide belt and factory numbers.</li></Typography>
            </ul>
          </SidebarPopup>
        </List>
      </React.Fragment>;
    };

    render() {
      const {classes} = this.props;
      if (!this.state.isReady) {
        return <Loader ready={this.state.isLoaded} parentState={this}/>;
      }
      const t = this;

      return <div className={classes.root}>

        <CssBaseline/>
        <MuiThemeProvider theme={this.state.theme}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Hidden mdUp implementation="css">
                <div className={classes.centeredLogo}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    // className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                  <img alt="wow so satis factory" className={classes.logoSmall}
                    src="https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/dot.png"
                    title="logo"/>
                </div>
              </Hidden>
              <Hidden smDown implementation="css">
                <img alt="wow so satis factory" className={classes.logo}
                  src="https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satisgraphtory.png"
                  title="logo"/>
              </Hidden>

              <div className={classes.grow} />
              <NightToggle t={t} onNightToggle={this.handleNightToggle} night={this.state.night}/>
              {useExperimentalFeature('opt') ? <Button color="inherit" onClick={() => t.graphSvg.optimize()}>
                <OfflineBoltIcon/>
                <Hidden smDown implementation="css">
                  <div className={classes.label}>Optimize</div>
                </Hidden>
              </Button> : null }
              <Button color="inherit" onClick={() => t.graphSvg.analyze()}>
                <SettingsInputComponentIcon/>
                <Hidden smDown implementation="css">
                  <div className={classes.label}>Analyze</div>
                </Hidden>
              </Button>
              <ShareButton t={t}/>
              {/*<LoadButton t={t}/>*/}
              <ClearButton t={t}/>
            </Toolbar>
          </AppBar>

          <FabPopup>
            <Typography variant="h4">Welcome to SatisGraphtory!</Typography>
            <Typography variant="body1">This is a factory planner/optimizer/analyzer tool for factories old and new, meant to accompany the game Satisfactory by Coffee Stain Studios. </Typography>
            <br />
            <Typography variant="body1">We are looking for more developers! If you know React, reach out to us on our <Link href={'https://discord.gg/ZRpcgqY'} target="_blank" rel="noopener" color="secondary">Discord server</Link>!</Typography>
            <Typography variant="body1">Thanks for checking out our tool! If you have any questions, suggestions, feedback, <Link href={'https://discord.gg/ZRpcgqY'} target="_blank" rel="noopener" color="secondary">join our community!</Link></Typography>
            <br />
            <Typography variant="h5">This tool will always be free.</Typography>
            <br />
            <Typography variant="h5">Graph Basics</Typography>
            <ul>
              <Typography variant="body1"><li>Use the <b>left menu</b> to <b>add</b> machines to the diagram</li></Typography>
              
              <Typography variant="body1"><li><b>CLICK</b> on a node/path to <b>select</b> it</li></Typography>
              <Typography variant="body1"><li>Press <b>BACKSPACE</b> on a selected node/path to delete it</li></Typography>
              <Typography variant="body1"><li>Hold down <b>SHIFT</b> and <b>drag</b> from node to node to create belts</li></Typography>
              <Typography variant="body1"><li>Use <b>MOUSE SCROLL</b> to control overclock (black text in the white circle)</li></Typography>
            </ul>
            <Typography variant="h5">Sharing</Typography>
            <Typography variant="body1">Generate a share code by using the Share button in the top right.</Typography>
            <br/>
            <Typography variant="h5">Legend</Typography>
            <Typography variant="body1"><span style={{'color': 'orange'}}>Orange</span> numbers means the machine wastes time doing nothing.</Typography>
            <Typography variant="body1"><span style={{'color': 'LightCoral'}}>Red</span> numbers means the machine isn't processing fast enough.</Typography>
            <Typography variant="body1"><span style={{'color': 'Blue'}}>Blue</span> numbers means the belt capacity was overridden (and you need to fix it ASAP!)</Typography>
            <br/>
            {/*<Typography variant="body1">Special thanks to the following testers: GeekyMeerkat, Stay, HartWeed, safken, marcspc, Laugexd</Typography>*/}
            <Typography variant="body1">Revisit these instructions anytime by clicking on the <b>?</b> in the bottom right.</Typography>

          </FabPopup>
          {/*{(this.state.selectedNode && ['Container', 'Oil Pump'].includes(this.state.selectedNode.machine.name)) ||(this.state.selectedNode && this.state.selectedNode.upgradeTypes.length > 1) || (this.state.selectedPath && this.state.selectedPath.upgradeTypes*/}
          {/*          && this.state.selectedPath.upgradeTypes.length > 1) ?*/}
          {/*   : null}*/}
          {this.state.selectedNode || this.state.selectedPath ? <SelectorPanel items={this.state.item.item} label='Options' graphSvg={this.graphSvg}
                                                                               overclock={this.state.selectedNode ? this.state.selectedNode.overclock : -1} selected={this.state.selectedNode || this.state.selectedPath}/> : null}

          <Hidden mdUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {this.drawerContents()}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <div className={classes.hiddenFlex}>
              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {this.drawerContents()}
              </Drawer>
            </div>
          </Hidden>



          <div id="svgParent" className={`${classes.content} ${this.state.night === 'dark' ? 'dark' : ''}`}>
            {this.state.loaded ? <GraphSvg parentAccessor={this} ref={(graphSvg) => {
              t.graphSvg = graphSvg;
            }}/> : <div/>}
          </div>
        </MuiThemeProvider>
      </div>;
    }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
