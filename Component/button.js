import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function ColorButtons(props) {
  const { nombre, ruta} = props;
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">
          <Link href={ruta}>
                <a className="nav-link" aria-current="page">{nombre}</a>
          </Link>
        </Button>
    </Stack>
  );
}
