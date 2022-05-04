import {useParams} from 'react-router-dom';
import styles from './store-feature-game-detail.module.scss';

import Card from '@material-ui/core/Card';
import { formatRating } from '@bg-hoard/store/util-formatters';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import { Button, CardActions, CardHeader, CardMedia } from '@material-ui/core';
import { Game } from '@bg-hoard/util-interface';


/* eslint-disable-next-line */

export const StoreFeatureGameDetail = () => {
  const params = useParams();
  const [state, setState] = useState<{
    data: Partial<Game>;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: {},
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const gameId = params['id'];
    fetch(`/api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, [params['id']]);
  return (
    <div className={styles['container']}>
       {state.loadingState === 'loading' ? (
        'Loading...'
      ) : state.loadingState === 'error' ? (
        <div>Error fetching data</div>
      ) : state.data == null ? (
        ''
      ) : (
        <Card>
          <CardHeader title={state.data.name}></CardHeader>
          {state.data.image ? (
            <CardMedia
              className={styles['game-card-media']}
              image={state.data.image}
              title={state.data.name}
            />
          ) : null}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {state.data.description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={styles['game-rating']}
            >
              <strong>Rating:</strong> {formatRating(state.data.rating)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              Buy
            </Button>
            <Button variant="contained">Share</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default StoreFeatureGameDetail;
