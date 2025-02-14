/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import ApmnEditor from './ApmnEditor';
import XMLEditor from '../xml';

import { createTab } from '../EditorTab';


const ApmnTab = createTab('ApmnTab', [
  {
    type: 'apmn',
    editor: ApmnEditor,
    defaultName: 'Diagram'
  },
  {
    type: 'xml',
    editor: XMLEditor,
    isFallback: true,
    defaultName: 'XML'
  }
]);



export default ApmnTab;