import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AppContext } from '../AppContext';


const WinPopUp = ()=>{
    const {
        seconds,
        time,
        win,
        baseUrl,
        setLeaders
    } = React.useContext(AppContext)
    const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{
    if (win) {
        setOpen(true)
    }
  }, [win])

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const formJson = Object.fromEntries(formData.entries());
            const data = formJson;
            console.log(data);
            fetch(`${baseUrl}/win`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify(data)
            }).then((res)=>{
                if (res.status >= 400) {
                    throw new Error("server error");
                  }
                  return res.json();
            }). then((res)=>{
                setLeaders(res.leaderBoard)
            }).catch((err)=>{
                console.log("Fetch error in home", err)
              })
             handleClose();
             window.location.reload()
          },
        }}
      >
        <DialogTitle>Leader Board</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To enter your score to leader board enter your name.
            The game will restart after submit.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={seconds}
            margin="dense"
            id="seconds"
            name="seconds"
            type="number"
            fullWidth
            variant="standard"
            label="Seconds"
            
          />
          <TextField
          value={time}
            margin="dense"
            id="time"
            name="time"
            type="text"
            fullWidth
            variant="standard"
            label="Time"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default WinPopUp