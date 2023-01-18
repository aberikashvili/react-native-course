import * as SQLite from 'expo-sqlite';
import { Place } from '../models/place';

const database = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            latitude REAL NOT NULL,
            longitude REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = (place) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) =>
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.latitude,
          place.location.longitude
        ],
        (_, result) => {
          resolve(resolve);
        },
        (_, error) => {
          reject(error);
        }
      )
    );
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) =>
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const places = result.rows._array.map(
            (item) =>
              new Place(
                item.title,
                item.imageUri,
                {
                  address: item.address,
                  latitude: item.latitude,
                  longitude: item.longitude
                },
                item.id
              )
          );
          resolve(places);
        },
        (_, error) => reject(error)
      )
    );
  });

  return promise;
};
