/* eslint-disable no-unused-vars */
jest.unmock('./CampaignSelector.jsx')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import CampaignSelector from './CampaignSelector.jsx'

describe('CampaignSelector', () => {

    it('changes the selected text after onChange', () => {
        // Render a checkbox with label in the document
        const checkbox = TestUtils.renderIntoDocument(
            <CampaignSelector />
        )

        const checkboxNode = ReactDOM.findDOMNode(checkbox)

        // Verify that it's Off by default
        /*expect(checkboxNode.textContent).toEqual('Off')

        // Simulate a click and verify that it is now On
        TestUtils.Simulate.change(
            TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
        )
        expect(checkboxNode.textContent).toEqual('On')
        */
    })

})