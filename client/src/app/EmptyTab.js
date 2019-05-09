/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React, { PureComponent, Fragment } from 'react';

import Slot from './slot-fill/Slot';

import css from './EmptyTab.less';

import {
  Tab
} from './primitives';

import Flags, { DISABLE_CMMN, DISABLE_DMN } from '../util/Flags';


export default class EmptyTab extends PureComponent {

  componentDidMount() {
    this.props.onShown();
  }

  triggerAction() {}

  render() {

    const {
      onAction
    } = this.props;

    return (
      <Tab className={ css.EmptyTab }>
        <p className="create-buttons">
          <span>Create a </span>
          <a href="javascript:void(0)" onClick={ () => onAction('create-apmn-diagram') }>APMN diagram</a>
          <span> or </span>
          <a className="create-diagram" href="javascript:void(0)" onClick={ () => onAction('create-bpmn-diagram') }>BPMN diagram</a>
          {
            !Flags.get(DISABLE_CMMN) && (
              <Fragment>
                <span> or </span>
                <a href="javascript:void(0)" onClick={ () => onAction('create-cmmn-diagram') }>CMMN diagram</a>
              </Fragment>
            )
          }
          {
            !Flags.get(DISABLE_DMN) && (
              <Fragment>
                <span> or </span>
                <a href="javascript:void(0)" onClick={ () => onAction('create-dmn-diagram') }>DMN diagram</a>
                <span> or </span>
                <a href="javascript:void(0)" onClick={ () => onAction('create-dmn-table') }>DMN table</a>
              </Fragment>
            )
          }
        </p>

        <Slot name="empty-tab-buttons" />
      </Tab>
    );
  }
}