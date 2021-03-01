import React from 'react';

import { Container } from './styles';
import './text.css'

function LoadInfos() {
  return(
    <>
        <Container>
            <div class="loading">
              <div class="loading__letter">C</div>
              <div class="loading__letter">A</div>
              <div class="loading__letter">R</div>
              <div class="loading__letter">R</div>
              <div class="loading__letter">E</div>
              <div class="loading__letter">G</div>
              <div class="loading__letter">A</div>
              <div class="loading__letter">N</div>
              <div class="loading__letter">D</div>
              <div class="loading__letter">O</div>
              <div class="loading__letter">.</div>
              <div class="loading__letter">.</div>
              <div class="loading__letter">.</div>
            </div>
        </Container>
    </>
  );
}

export default LoadInfos;