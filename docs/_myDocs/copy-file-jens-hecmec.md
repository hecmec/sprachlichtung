Copy a file to another user on the same machine

The destination is under another user's home (hecmec), and your user (jens) doesn't have permission to access it — so a plain cp will fail. You'll need sudo:

    sudo cp "/home/jens/Images/<image-name>" /home/hecmec/code/sprachlichtung/docs/sprach-welten/060-energie/img/

Then fix ownership so hecmec owns the file:

    sudo chown hecmec:hecmec "/home/hecmec/code/sprachlichtung/docs/sprach-welten/060-energie/img/<image-name>"
