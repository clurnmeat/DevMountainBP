-- TODO:

    -- Get all invoices where the unit_price on the invoice_line is greater than $0.99.

    -- Get all playlist tracks where the playlist name is Music.

    -- Get all track names for playlist_id 5.

    -- Get all tracks where the genre is Comedy.

    -- Get all tracks where the album is Fireball.

    -- Get all tracks for the artist Queen ( 2 nested subqueries ).
-- 


SELECT * FROM invoice WHERE total > .99

SELECT * FROM playlist_tracks WHERE playlist_name =`Music`

SELECT * 
FROM playlist 
WHERE name = 'Music'

SELECT track_id 
FROM playlist_track WHERE playlist_id IN(
  SELECT playlist_id FROM playlist 
  WHERE name = 'Music'
  );

SELECT * FROM track WHERE track_id IN (SELECT track_id FROM playlist_track WHERE playlist_id = 5)





